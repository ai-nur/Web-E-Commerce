import React from "react";
import "./FooterBar.scss";

import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputBase,
  Link,
  Paper,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FooterBar = () => {
  return (
    <Box>
      <footer className="footer-bar">
        <Container>
          <Grid container columnSpacing={5}>
            <Grid item xs={12} sm="auto">
              <Box borderBottom={1}>UT Market</Box>
              <Box>
                <Link href="/" color="inherit">
                  Tentang UT Market
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Pencari Lokasi Toko
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Pembelian Dalam Jumlah Besar
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm="auto">
              <Box borderBottom={1}>Kategori</Box>
              <Box>
                <Link href="/" color="inherit">
                  Makanan
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Minuman
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Kesehatan &amp; Kecantikan
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Perlengkapan Rumah Tangga
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm="auto">
              <Box borderBottom={1}>Layanan Pelanggan</Box>
              <Box>
                <Link href="/" color="inherit">
                  Akun Ku
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Diskon
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Pengembalian
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Riwayat Pemesanan
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Pelacak Pemesanan
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm="auto">
              <Box borderBottom={1}>
                Dapatkan Informasi Terbaru &amp; Promo Menarik
              </Box>
              <Box>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Masukkan Email disini..."
                    inputProps={{ "aria-label": "masukkan email" }}
                  />
                  <Button>Berlangganan</Button>
                </Paper>
              </Box>
              <Box sx={{ height: 40 }}></Box>
              <Box borderBottom={1}>Temukan Kami di</Box>
              <Box>
                <Link href="/">
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                </Link>
                <Link href="/">
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>
                </Link>
                <Link href="/">
                  <IconButton>
                    <WhatsAppIcon />
                  </IconButton>
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box className="Copyright">
            <p>Copyright &copy; 2022 UT Market</p>
          </Box>
        </Container>
      </footer>
    </Box>
  );
};

export default FooterBar;
