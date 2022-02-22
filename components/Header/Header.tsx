import { Divider } from "semantic-ui-react";

type HeaderProps = {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return (
        <div>
            <p>
                {title}
            </p>
            <Divider fitted />
            <style jsx>
                {`
                    p{
                        margin-bottom: 0px;
                        font-size: 0.9em;
                        color: grey;
                        margin-bottom: 8px
                    }
                `}
            </style>
        </div>
    )
}
export default Header;