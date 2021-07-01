import { HamburgerMenuSVG } from "../atoms/HamburgerMenuSVG"

export type Props = {
    onClick: () => void;
}

export const HamburgerMenu: React.VFC<Props> = (props) => {
    return (
        <button onClick={props.onClick} type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
            <HamburgerMenuSVG />
        </button>
    )
}