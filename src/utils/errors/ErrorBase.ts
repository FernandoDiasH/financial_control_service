
export abstract class ErrorBase extends Error {
        public message: string
        public code: number = 500
        public description?: string
}
