import { appRouter } from "@/trpc"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

const handler = (req: Request) => {
    const result = fetchRequestHandler({
        endpoint: "/api/trpc",
        req,
        router: appRouter,
        createContext: () => ({})
    })
    return result;
}

export { handler as GET, handler as POST }