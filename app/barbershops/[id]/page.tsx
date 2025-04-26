import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/_lib/auth";

interface PageProps {
  params: { id?: string };
}

const BarbershopDetailsPage = async ({ params }: PageProps) => {
  console.log("Recebendo params:", params);

  if (!params?.id) {
    console.error("Erro: ID não fornecido!");
    return null;
  }

  const session = await getServerSession(authOptions);

  console.log("Buscando barbearia no banco...");
  const barbershop = await db.barbershop.findUnique({
    where: { id: params.id },
    include: { services: true },
  });

  if (!barbershop) {
    console.error("Erro: Nenhuma barbearia encontrada para o ID", params.id);
    return null;
  }

  console.log("Renderização concluída.");

  return (
    <div className="px-5 flex flex-col gap-5 py-6">
      <BarbershopInfo barbershop={barbershop} />
      {barbershop.services.map((service) => (
        <ServiceItem
          key={service.id}
          barbershop={barbershop}
          service={service}
          isAuthenticated={!!session?.user}
        />
      ))}
    </div>
  );
};

export default BarbershopDetailsPage;