type FormModal<T> = {
    formType: "new" | "edit" | null | undefined,
    record?: T,
}
