import React from "react"
import { Container, Title, List, Item, Picture, Name } from "./styles/profiles"

function Profiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Profiles.Title = function ProfilesTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>
}

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>
}

Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
    />
  )
}

Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>
}

export default Profiles
