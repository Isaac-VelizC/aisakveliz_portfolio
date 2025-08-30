import { motion } from "framer-motion";

type Props = {
    setOpen: (open: boolean) => void;
};

const OverlayCloseMovil = ({ setOpen  }: Props) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setOpen(false)}
    />
  );
};

export default OverlayCloseMovil;
