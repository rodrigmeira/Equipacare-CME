"use client";

import logo from "@/../public/logo-eqpc.webp";
import search from "@/../public/search.svg";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <div className="bg-[#031125] flex flex-row items-center justify-between py-5 px-4">
      <div className="flex-grow">
        <Image src={logo} alt="Logo Equipacare" width={140} height={50} />
      </div>
      <nav className="md:hidden flex-shrink" style={{ marginRight: "10px" }}>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          style={{
            color: "white",
            backgroundColor: "#91AB29",
            borderRadius: "5px",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{ width: "500px" }}
        >
          <List onClick={toggleDrawer(false)}>
            {[
              "HOME",
              "BLOG",
              "SERVIÇOS",
              "MATERIAIS",
              "CLIENTES",
              "EQUIPACARE EDU",
              "FIX SYSTEM",
              "CONTATO",
            ].map((text) => (
              <ListItem key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem>
              <Image src={search} alt="Busca" width={16} height={16} />
            </ListItem>
          </List>
        </Drawer>
      </nav>
      <nav className="hidden md:flex flex-shrink">
        <ul className="flex flex-row items-center gap-4">
          {[
            "HOME",
            "BLOG",
            "SERVIÇOS",
            "MATERIAIS",
            "CLIENTES",
            "EQUIPACARE EDU",
            "FIX SYSTEM",
            "CONTATO",
          ].map((text) => (
            <li
              key={text}
              className="text-[#91AB29] text-sm font-semibold cursor-pointer"
            >
              {text}
            </li>
          ))}
          <li>
            <Image src={search} alt="Busca" width={16} height={16} />
          </li>
        </ul>
      </nav>
    </div>
  );
};
