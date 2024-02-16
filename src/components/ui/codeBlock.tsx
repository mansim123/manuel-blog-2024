import React, { useEffect, useRef } from "react";
import { Toaster, toast } from "sonner";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";

interface CodeBlockProps {
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(children);
    toast("Copied to clipboard!");
  };

  return (
    <div className="flex items-center py-6">
      <code className="resize-none flex-grow mr-4 bg-secondary p-2 rounded">
        <pre
          style={{
            whiteSpace: "pre-wrap",
            textIndent: "0",
            paddingLeft: "0.5rem", // Adjust this value as needed
          }}
        >
          {children.trim()}
        </pre>
      </code>

      <Toaster />
      <button onClick={copyCodeToClipboard}>
        <ClipboardCopyIcon className="cursor-pointer" />
      </button>
    </div>
  );
};

export default CodeBlock;
