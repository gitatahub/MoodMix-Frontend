import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";

export default function NavbarComponent() {
  return (
   <Navbar
  className="
    fixed top-4 left-1/2 -translate-x-1/2 
    w-[90%] max-w-5xl 
    bg-black/30 backdrop-blur-xl backdrop-saturate-150 
    border border-white/10 
    rounded-4xl shadow-lg 
    
    z-50
  "
>
      <NavbarBrand>
        {/* Replace this with your own logo later if you want */}
        <p className="font-bold text-inherit text-lg">MoodMix</p>
      </NavbarBrand>

      {/* Center navigation links */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Upload
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Playlists
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Profile
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right side - Auth buttons */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
