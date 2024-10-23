//[02:23:00] https://www.youtube.com/watch?v=ADJKbuayubE
"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";

interface DashboardPageProps {
    searchParams: {
        seach?: string;
        favorites?: string;
    };
}

const DashboardPage = ({
    searchParams
}: DashboardPageProps) => {
    const { organization } = useOrganization();

    return (
        <div className="flex-1 h-[calc(100%-76px)] p-6">
            {!organization ? (
                <EmptyOrg />
            ) : (
                <BoardList
                    orgId={organization.id}
                    query={searchParams}
                />
            )}
        </div>
    );
};

export default DashboardPage;
