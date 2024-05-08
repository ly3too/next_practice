import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { BsCreditCard, BsPaypal, BsApple} from "react-icons/bs";

export function PaymentMethod() {
    return <Card>
        <CardHeader className=" flex-wrap">
            <h3 className="w-full text-2xl font-semibold"> Payment Method </h3>
            <p className="w-full text-sm text-base-content/50 pt-1"> Add a new payment method to your account. </p>
        </CardHeader>
        <CardContent className="grid gap-6">
            <div className="grid grid-cols-3 gap-3">
                <div className="flex justify-center">
                    <input type="radio" name="radio" id="radio-1" className="peer hidden" defaultChecked/>
                    <label role="radio"  htmlFor="radio-1" className="flex flex-col items-center p-4 border-2 peer-checked:border-primary text-sm justify-between rounded-md px-6 hover:bg-base-200">
                        <BsCreditCard className="w-6 h-6 mb-3"/>
                        Card
                    </label>
                </div>
                <div className="flex justify-center">
                    <input type="radio" name="radio" id="radio-2" className="peer hidden"/>
                    <label role="radio"  htmlFor="radio-2" className="flex flex-col items-center p-4 border-2 peer-checked:border-primary text-sm justify-between rounded-md px-6 hover:bg-base-200">
                        <BsPaypal className="w-6 h-6 mb-3"/>
                        Paypal
                    </label>
                </div>
                <div className="flex justify-center">
                    <input type="radio" name="radio" id="radio-3" className="peer hidden"/>
                    <label role="radio"  htmlFor="radio-3" className="flex flex-col items-center p-4 border-2 peer-checked:border-primary text-sm justify-between rounded-md px-6 hover:bg-base-200">
                        <BsApple className="w-6 h-6 mb-3"/>
                        Apple
                    </label>
                </div>
               
                
            </div>
        </CardContent>
        <CardFooter>
            <button className="btn border-2 btn-primary text-base-100 font-normal h-10 w-full btn-sm"> Continue </button>
        </CardFooter>
    </Card>
}