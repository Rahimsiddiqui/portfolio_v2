import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
} from "@/components/ui/alert";
import { CheckCircle2Icon, TriangleAlert, X } from "lucide-react";

const ToastContext = createContext(null);

function ToastItem({ toast, defaultDuration, onRemove }) {
  const { id, title, description, variant, duration } = toast;

  useEffect(() => {
    // If explicit duration is 0, the toast stays open until manually closed
    if (duration === 0) return;

    const finalDuration = duration ?? defaultDuration;
    const timer = setTimeout(() => {
      onRemove(id);
    }, finalDuration);

    return () => clearTimeout(timer);
  }, [id, duration, defaultDuration, onRemove]);

  return (
    <div className="w-full max-w-xs relative animate-in fade-in slide-in-from-top-2 duration-200">
      <Alert
        variant={variant}
        className="shadow-lg py-5.25 bg-slate-900 border-slate-800"
      >
        {variant === "destructive" ? (
          <TriangleAlert className="size-6 ml-1 mr-1.5 text-red-500!" />
        ) : (
          <CheckCircle2Icon className="size-6 ml-1 mr-1.5 text-white/90!" />
        )}
        <AlertTitle
          className={`text-lg font-bold ${variant === "destructive" ? "text-red-500!" : "text-white/90!"} tracking-tight`}
        >
          {title}
        </AlertTitle>
        {description && (
          <AlertDescription
            className={`text-sm ${variant === "destructive" ? "text-red-500/95! font-semibold" : "text-white/75! font-medium"} mt-1.5`}
          >
            {description}
          </AlertDescription>
        )}
        <AlertAction>
          <button
            type="button"
            onClick={() => onRemove(id)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground cursor-pointer p-0.5 rounded-sm hover:bg-muted transition-colors focus:outline-none focus:ring-1 focus:ring-ring"
            aria-label="Close notification"
          >
            <X className="size-4.5" />
          </button>
        </AlertAction>
      </Alert>
    </div>
  );
}

export function ToastProvider({ children, duration = 5000 }) {
  const [toasts, setToasts] = useState([]);

  const push = useCallback((toast) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    setToasts((t) => [...t, { id, ...toast }]);
    return id;
  }, []);

  const remove = useCallback((id) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={push}>
      {children}
      <div className="fixed top-28 right-12 z-50 flex flex-col gap-2 pointer-events-none w-full max-w-xs sm:right-6">
        <div className="flex flex-col gap-2 pointer-events-auto">
          {toasts.map((toast) => (
            <ToastItem
              key={toast.id}
              toast={toast}
              defaultDuration={duration}
              onRemove={remove}
            />
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return ctx;
}

export default ToastProvider;
