"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/shared/lib/utils";
import { useAgentStore } from "../model/agent-store";
import { AgentPanelContent } from "./AgentPanelContent";
import { AgentPanelHeader } from "./AgentPanelHeader";
import { ResizeHandle } from "./ResizeHandle";

export function AgentPanel() {
  const { isOpen, isMaximized, close, width, setWidth } = useAgentStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          {!isMaximized && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
          )}

          {/* Panel Container */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{ width: isMaximized ? "100vw" : `${width}px` }}
            className={cn(
              "fixed top-0 right-0 h-full glass z-[70] shadow-2xl flex flex-col max-w-full transition-all duration-300",
              isMaximized ? "w-screen sm:w-full" : "",
            )}
          >
            {/* Resize Handle - Desktop Only, hide if maximized */}
            {!isMaximized && <ResizeHandle setWidth={setWidth} />}

            {/* Panel Assembly */}
            <AgentPanelHeader onClose={close} />
            <div className="flex-1 min-h-0 flex flex-col relative overflow-hidden">
              <AgentPanelContent />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
