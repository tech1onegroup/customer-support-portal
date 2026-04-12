import { prisma } from "@/lib/prisma";

export async function createNotification(params: {
  customerId: string;
  type: string;
  title: string;
  body: string;
}) {
  return prisma.notification.create({
    data: {
      customerId: params.customerId,
      type: params.type,
      title: params.title,
      body: params.body,
      channels: "IN_APP,SMS",
      sentAt: new Date(),
    },
  });
}
