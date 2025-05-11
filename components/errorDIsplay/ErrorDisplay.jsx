"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "../ui/button";

export function ErrorDisplay({
  title = "Something went wrong",
  message,
  showRetry = true,
}) {
  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm">{message}</p>
          {showRetry && (
            <Button
              variant="outline"
              size="sm"
              className="mt-3 gap-2 text-red-600 border-red-300 hover:bg-red-100"
              onClick={() => window.location.reload()}
            >
              <RefreshCw size={14} />
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
