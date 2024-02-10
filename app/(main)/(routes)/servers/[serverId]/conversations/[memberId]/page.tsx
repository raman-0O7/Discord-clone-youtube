import { ChatHeader } from '@/components/chat/chat-header';
import { findOrCreateConversation } from '@/lib/conversation';
import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'

interface MemberIdPageProps {
  params : {
    serverId : string;
    memberId : string;
  }
}
export default async function MemberIdPage({ params } : MemberIdPageProps) {
  const profile = await currentProfile();

  if(!profile) {
    return redirectToSignIn();
  }

  const currentMember = await db.member.findFirst({
    where: {
      serverId: params.serverId,
      profileId : profile.id
    },
    include : {
      profile: true
    }
  });

  if(!currentMember) {
    return redirect("/");
  }

  const conversation = await findOrCreateConversation(currentMember.id, params.memberId);

  if(!conversation) {
    return redirect(`/servers/${params?.serverId}`);
  }

  const { memberOne, memberTwo } = conversation;

  const otherMember = (memberOne.profileId === profile.id) ? memberTwo : memberOne;

  return (
    <div className='bg-white dark:bg-[#313338] h-full flex flex-col'>
      <ChatHeader 
        serverId={params.serverId}
        imageUrl={otherMember.profile.imageUrl}
        type='conversation'
        name={otherMember.profile.name}
      />
    </div>
  )
}
