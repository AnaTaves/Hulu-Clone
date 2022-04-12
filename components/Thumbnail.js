import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef, useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgb(0,19,22)',
    borderRadius: '25px',
    boxShadow: '0px 0px 28px 6px rgba(37,37,37,0.85)',
    p: 4,
  };

const Thumbnail = forwardRef(({ result }, ref) => {
  const [showModal, setShowModal] = useState(false);

  const BASE_URL = "https://image.tmdb.org/t/p/original";

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <article
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.backdrop_path}`
        }
        height={1080}
        width={1920}
        layout="responsive"
      />

      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-200 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100">
          {result.media_type && `${result.media_type} ·`}{" "}
          {result.release_date && `${result.release_date} ·`}{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
      <Button
        className="flex items-center opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100 text-white"
        onClick={handleOpen}
      >
        More Info
      </Button>
      <Modal
        keepMounted
        open={showModal}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h4" component="h2">
            {result.title || result.original_name}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            {result.overview}
          </Typography>
        </Box>
      </Modal>
    </article>
  );
});

export default Thumbnail;
