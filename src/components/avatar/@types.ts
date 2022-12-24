import { getContext, setContext } from 'svelte';

export const setAvatarGroupContext = () => setContext<boolean>('group', true);
export const getAvatarGroupContext = () => getContext<boolean>('group');
