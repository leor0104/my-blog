
type HeaderProps = {
    title: string;
}

const Header = ({title}: HeaderProps) => {
    return (
      <div>
      <p>
          {title}
      </p>
      <hr/>
      </div>
      )
}
export default Header;