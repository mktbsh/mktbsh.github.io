import { useRouter } from 'next/router'

export const useRocale = () => {
    const { locale } = useRouter();

    const t = locale === 'ja' ? 'ja' : 'en';

    return { locale, t };
}