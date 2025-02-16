const Footer = () => {
  return (
    <footer className="bg-[#6C2E93] text-white py-4 mt-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Eng Chin Hang Construction Pte Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

