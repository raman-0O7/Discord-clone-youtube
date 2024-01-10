"use client";

import {
    Dialog,
    DialogHeader,
    DialogDescription,
    DialogTitle,
    DialogContent
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal-store";
import { ServerWithMembersWithProfiles } from "@/types";
import { ScrollArea } from "../ui/scroll-area";



export function MembersModal() {
    const { type, onClose, isOpen, data, onOpen } = useModal();

    const { server } = data as { server: ServerWithMembersWithProfiles};
    const isModalOpen = isOpen && type == "members";


    return (

        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Manage Members
                    </DialogTitle>
                    <DialogDescription >
                        {server?.members?.length}
                    </DialogDescription>
                </DialogHeader>
                
               <ScrollArea className="mt-8 max-h-[420px] pr-6">
                {server?.members?.map((member)=> (
                    <div key={member.id} className="flex items-center gap-x-2 mb-6">
                        <UserAvatar />
                    </div>
                ))}
               </ScrollArea>
            </DialogContent>
        </Dialog>

    )
}