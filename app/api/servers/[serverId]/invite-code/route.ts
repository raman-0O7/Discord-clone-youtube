
import { v4 as uuidv4 } from 'uuid';
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async  function PATCH(
  req:Request , 
  { params }: { params : { serverId: string}}
) {
  try {
    const profile = await currentProfile();
    if(!profile) return new NextResponse("Unauthorized! Access denied", {status:400});

    if(!params.serverId) return new NextResponse("Missing Server ID", {status:400});

    const server = await db.server.update({
      where: {
        id : params.serverId,
        profileId :profile.id,

      },
      data : {
        inviteCode : uuidv4() 
      }
    })
    return NextResponse.json(server);

  } catch(e) {
    console.log("[Server_ID]", e);
    return new NextResponse("Internal error", {status:500});
  }
}