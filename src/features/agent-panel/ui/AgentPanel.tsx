"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useAgentStore } from "../model/agent-store";
import { AgentPanelContent } from "./AgentPanelContent";
import { AgentPanelFooter } from "./AgentPanelFooter";
import { AgentPanelHeader } from "./AgentPanelHeader";
import { ResizeHandle } from "./ResizeHandle";

export function AgentPanel() {
  const { isOpen, close, width, setWidth } = useAgentStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Panel Container */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{ width: `${width}px` }}
            className="fixed top-0 right-0 h-full glass z-[70] shadow-2xl flex flex-col max-sm:!w-full max-w-full"
          >
            {/* Resize Handle - Desktop Only */}
            <ResizeHandle width={width} setWidth={setWidth} />

            {/* Panel Assembly */}
            <AgentPanelHeader onClose={close} />
            <AgentPanelContent />
            <AgentPanelFooter />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
