/* supabase integration types

Events // table: events
    id: number
    created_at: string
    name: string
    date: string
    venue_id: number
    is_starred: boolean

Comments // table: comments
    id: number
    created_at: string
    content: string
    event_id: number // foreign key to Events

*/

// Hooks for Events table
export const useEvents = () => useQuery({
    queryKey: ['events'],
    queryFn: () => fromSupabase(supabase.from('events').select('*')),
});

export const useAddEvent = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newEvent) => fromSupabase(supabase.from('events').insert([newEvent])),
        onSuccess: () => {
            queryClient.invalidateQueries('events');
        },
    });
};

export const useUpdateEvent = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedEvent) => fromSupabase(supabase.from('events').update(updatedEvent).eq('id', updatedEvent.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('events');
        },
    });
};

export const useDeleteEvent = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (eventId) => fromSupabase(supabase.from('events').delete().eq('id', eventId)),
        onSuccess: () => {
            queryClient.invalidateQueries('events');
        },
    });
};

// Hooks for Comments table
export const useComments = () => useQuery({
    queryKey: ['comments'],
    queryFn: () => fromSupabase(supabase.from('comments').select('*')),
});

export const useAddComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newComment) => fromSupabase(supabase.from('comments').insert([newComment])),
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
    });
};

export const useUpdateComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedComment) => fromSupabase(supabase.from('comments').update(updatedComment).eq('id', updatedComment.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
    });
};

export const useDeleteComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (commentId) => fromSupabase(supabase.from('comments').delete().eq('id', commentId)),
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
    });
};

/* supabase integration types

Events // table: events
    id: number
    created_at: string
    name: string
    date: string
    venue_id: number
    is_starred: boolean

Comments // table: comments
    id: number
    created_at: string
    content: string
    event_id: number // foreign key to Events

*/

// Hooks for Events table
export const useEvents = () => useQuery({
    queryKey: ['events'],
    queryFn: () => fromSupabase(supabase.from('events').select('*')),
});

export const useAddEvent = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newEvent) => fromSupabase(supabase.from('events').insert([newEvent])),
        onSuccess: () => {
            queryClient.invalidateQueries('events');
        },
    });
};

export const useUpdateEvent = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedEvent) => fromSupabase(supabase.from('events').update(updatedEvent).eq('id', updatedEvent.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('events');
        },
    });
};

export const useDeleteEvent = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (eventId) => fromSupabase(supabase.from('events').delete().eq('id', eventId)),
        onSuccess: () => {
            queryClient.invalidateQueries('events');
        },
    });
};

// Hooks for Comments table
export const useComments = () => useQuery({
    queryKey: ['comments'],
    queryFn: () => fromSupabase(supabase.from('comments').select('*')),
});

export const useAddComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newComment) => fromSupabase(supabase.from('comments').insert([newComment])),
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
    });
};

export const useUpdateComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedComment) => fromSupabase(supabase.from('comments').update(updatedComment).eq('id', updatedComment.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
    });
};

export const useDeleteComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (commentId) => fromSupabase(supabase.from('comments').delete().eq('id', commentId)),
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
    });
};