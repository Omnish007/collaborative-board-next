"use client";
import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";
import { LiveblocksProvider } from "@liveblocks/react";
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
    params: {
        boardId: string;
    };
}

const BoardIdPage = ({
    params
}: BoardIdPageProps) => {
    return (
        <LiveblocksProvider
            // publicApiKey={
            //     process.env
            //         .NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_API_KEY!
            // }
            authEndpoint={"/api/liveblocks-auth"}
        >
            <Room
                roomId={params.boardId}
                fallback={<Loading />}
            >
                <Canvas
                    boardId={params.boardId}
                />
            </Room>
        </LiveblocksProvider>
    );
};

export default BoardIdPage;
