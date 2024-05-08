import {CardHeader, Card, CardContent, CardFooter} from "@/components/ui/card"

export const CardCookieSetting = function() {
    return <Card>
        <CardHeader className="flex-wrap">
            <h3 className="w-full text-2xl font-semibold"> Cookie Settings </h3>
            <p className="w-full text-sm text-base-content/50 pt-1"> Manage your cookie settings here. </p>
        </CardHeader>
        <CardContent className=" grid gap-4">
            <label className="cursor-pointer label felx items-center justify-between">
                <div className="flex flex-col space-y-1">
                    <span className="">Strictly Necessary</span> 
                    <span className="text-xs font-normal text-base-content/50 leading-snug">These cookies are essential in order to use the website and use its features.</span> 
                </div>
                <input type="checkbox" className="toggle toggle-primary" defaultChecked/>
            </label>

            <label className="cursor-pointer label felx items-center justify-between">
                <div className="flex flex-col space-y-1">
                    <span className="">Functional Cookies</span> 
                    <span className="text-xs font-normal text-base-content/50 leading-snug">These cookies allow the website to provide personalized functionality.</span> 
                </div>
                <input type="checkbox" className="toggle toggle-primary"/>
            </label>

            <label className="cursor-pointer label felx items-center justify-between">
                <div className="flex flex-col space-y-1">
                    <span className="">Performance Cookies</span> 
                    <span className="text-xs font-normal text-base-content/50 leading-snug">These cookies help to improve the performance of the website.</span> 
                </div>
                <input type="checkbox" className="toggle toggle-primary"/>
            </label>
        </CardContent>
        <CardFooter>
            <button className="btn border-2 bg-white font-normal h-10 w-full btn-sm">Save preferences</button>
        </CardFooter>
    </Card>
}