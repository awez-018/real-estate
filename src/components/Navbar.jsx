import { Home, Phone, Menu } from "lucide-react";
// import { Button } from "@/components/ui/Button";

function Navbar(){
    return (
        <nav className="w-full bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-2xl font-bold text-blue-700">
              <Home className="text-blue-700" />
              DreamNest
            </div>
    
            <div className="hidden md:flex gap-6 text-gray-700 text-sm font-medium">
              <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#listings" className="hover:text-blue-600 transition-colors">Listings</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
    
            {/* <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">Login</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
            </div>
    
            <div className="md:hidden">
              <Menu className="text-blue-700" />
            </div> */}
          </div>
        </nav>
      );
}



export default Navbar;

