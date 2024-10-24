import { v } from "convex/values";
import { mutation } from "./_generated/server";

const images = [
    "/placeholder/1.svg",
    "/placeholder/2.svg",
    "/placeholder/3.svg",
    "/placeholder/4.svg",
    "/placeholder/5.svg",
    "/placeholder/6.svg",
    "/placeholder/7.svg",
    "/placeholder/8.svg",
    "/placeholder/9.svg",
    "/placeholder/10.svg",
    "/placeholder/11.svg",
    "/placeholder/12.svg",
    "/placeholder/13.svg"
];

export const create = mutation({
    args: {
        orgId: v.string(),
        title: v.string()
    },
    handler: async (ctx, args) => {
        const identity =
            await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        const randomImage =
            images[
                Math.floor(
                    Math.random() * images.length
                )
            ];

        const board = await ctx.db.insert(
            "boards",
            {
                title: args.title,
                orgId: args.orgId,
                authorId: identity.subject,
                authorName: identity.name!,
                imageUrl: randomImage
            }
        );

        return board;
    }
});

export const remove = mutation({
    args: {
        id: v.id("boards")
    },
    handler: async (ctx, args) => {
        const identity =
            await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        await ctx.db.delete(args.id);
    }
});

export const update = mutation({
    args: {
        id: v.id("boards"),
        title: v.string()
    },
    handler: async (ctx, args) => {
        const identity =
            await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        const title = args.title.trim();

        if (!title)
            throw new Error("Title is required");

        if (title.length > 60)
            throw new Error(
                "Title can not be longer than 60 characters"
            );

        const board = await ctx.db.patch(
            args.id,
            {
                title: args.title
            }
        );

        return board;
    }
});