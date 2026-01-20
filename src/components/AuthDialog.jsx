import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const AuthDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline">sign in</Button> */}
        <Button>sign up</Button>
      </DialogTrigger>
      <DialogContent>
        
      </DialogContent>
    </Dialog>
  );
};
export default AuthDialog;
