import NextLink from 'next/link'

export type LinkProps = {
    href: string;
    name: string;
}

export const Link: React.VFC<LinkProps> = ({ href, name }) => {
    return (
        <NextLink href={href}>
            <a className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0">
                {name}
            </a>
        </NextLink>
    )
}

