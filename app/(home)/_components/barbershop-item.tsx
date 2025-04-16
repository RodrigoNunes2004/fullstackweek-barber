import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { Badge } from "@/app/_components/ui/badge";
import Image from "next/image";
import { StarIcon } from "lucide-react"



interface BarbershopProps {
    barbershop: Barbershop;
}
const BarbershopItem = ({barbershop}: BarbershopProps) => {

    return (
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="px-1 py-0">
                <div className="w-full h-[159px] relative">
                <div className="absolute top-2 left-2 z-50">   
                <Badge variant="secondary" className="opacity-90 flex gap-1 items-center absolute top-3 left-3">
                    <StarIcon size={12} className="fill-primary text-primary" />
                    <span>5,0</span>
                </Badge>
                </div>
                <Image src={barbershop.imageUrl} alt={barbershop.name} height={0} width={0} sizes="100vw" className="h-[159px] w-full rounded-2xl" />
                </div>
                <div className="px-2 pb-3">
                <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                <Button className="w-full mt-3" variant="secondary">
                Reserve
                </Button>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default BarbershopItem;