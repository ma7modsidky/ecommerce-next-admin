"use client"
import { Button } from "@/components/ui/button";
import { useStoreModal } from "@/hooks/useStoreModal";
import { useEffect } from "react";

export default function Home() {
  const onOpen = useStoreModal((state)=> state.onOpen);
  const isOpen = useStoreModal((state)=> state.isOpen);

  useEffect(()=>{
    if(!isOpen){
      onOpen();
    }
  }, [isOpen, onOpen]);
  return (
    <div className="p-4">
      Hello Admin Dashboard
      <div>
        <Button>Click</Button>
      </div>
    </div>
  );
}
