import { Barbershop, Booking, Prisma, Service } from "@prisma/client";
import { format } from "date-fns";
import { Card, CardContent } from "./ui/card";

interface BookingInfoProps {
  booking: Partial<Pick<Booking, "date">> & {
    service: Pick<Service, "name" | "price">;
    barbershop: Pick<Barbershop, "name">;
  };
}

const BookingInfo = ({ booking }: BookingInfoProps) => {
  return (
    <Card>
      <CardContent className="p-3 gap-3 flex flex-col">
        <div className="flex justify-between">
          <h2 className="font-bold">{booking.service.name}</h2>
          <h3 className="font-bold text-sm">
            {" "}
            {Intl.NumberFormat("pt-NZ", {
              style: "currency",
              currency: "NZD",
            }).format(Number(booking.service.price))}
          </h3>
        </div>

        {booking.date && (
          <>
            <div className="flex justify-between">
              <h3 className="text-gray-400 text-sm">Date</h3>
              <h4 className="text-sm">
                {format(booking.date, "dd MMMM", {
                })}
              </h4>
            </div>

            <div className="flex justify-between">
              <h3 className="text-gray-400 text-sm">Time</h3>
              <h4 className="text-sm">{format(booking.date, "hh:mm")}</h4>
            </div>
          </>
        )}

        <div className="flex justify-between">
          <h3 className="text-gray-400 text-sm">Barber</h3>
          <h4 className="text-sm">{booking.barbershop.name}</h4>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingInfo;