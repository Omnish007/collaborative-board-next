// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//     matcher: [
//         // Skip Next.js internals and all static files, unless found in search params
//         "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//         // Always run for API routes
//         "/(api|trpc)(.*)"
//     ]
// };

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(async (auth) => {
    const authentication = await auth();
    const token = await authentication.getToken();
    if (!token) {
        authentication.redirectToSignIn();
    }
});

export const config = {
    matcher: [
        "/((?!.*\\..*l_next).*)",
        "/",
        "/(api|trpc)(.*)"
    ]
};
