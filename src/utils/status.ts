export const PHONE_NUMBER = "554998343314";
export const FORMATTED_PHONE = "(49) 9834-3314";
export const ADDRESS = "Rua Alfredo Wagner, Alvorada, Chapecó - SC, 89804-430, Brasil";
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Rua+Alfredo+Wagner,+Alvorada,+Chapeco+-+SC,+89804-430";
export const WAZE_URL = "https://waze.com/ul?q=Rua%20Alfredo%20Wagner%20Chapeco%20SC";

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = "Olá! Vim pelo site da Prime Beer e gostaria de fazer um pedido.";
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${PHONE_NUMBER}?text=${text}`;
}

export interface OperatingScheduleItem {
  dayName: string;
  dayIndex: number; // 0 = Domingo, 1 = Segunda, etc.
  displayHours: string;
  isSpecial?: boolean;
}

export const OPERATING_SCHEDULE: OperatingScheduleItem[] = [
  { dayName: "Segunda-feira", dayIndex: 1, displayHours: "09:00 - 23:00" },
  { dayName: "Terça-feira", dayIndex: 2, displayHours: "09:00 - 23:00" },
  { dayName: "Quarta-feira", dayIndex: 3, displayHours: "09:00 - 23:00" },
  { dayName: "Quinta-feira", dayIndex: 4, displayHours: "09:00 - 23:00" },
  { dayName: "Sexta-feira", dayIndex: 5, displayHours: "02:00 - 02:00", isSpecial: true },
  { dayName: "Sábado", dayIndex: 6, displayHours: "01:00 - 03:00", isSpecial: true },
  { dayName: "Domingo", dayIndex: 0, displayHours: "10:00 - 23:00" },
];

export interface StoreStatus {
  isOpen: boolean;
  statusText: string;
  currentDayName: string;
  currentHours: string;
  nextOpenText?: string;
}

export function getCurrentStoreStatus(): StoreStatus {
  try {
    // Obter horário atual no fuso de Chapecó/Brasília (UTC-3)
    const now = new Date();
    const brTimeStr = now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
    const brDate = new Date(brTimeStr);
    
    const day = brDate.getDay();
    const hours = brDate.getHours();
    const minutes = brDate.getMinutes();
    const currentDecimalTime = hours + minutes / 60;

    const todayConfig = OPERATING_SCHEDULE.find((s) => s.dayIndex === day) || OPERATING_SCHEDULE[0];

    let isOpen = false;

    if (day === 1 || day === 2 || day === 3 || day === 4) {
      // 09:00 as 23:00
      isOpen = currentDecimalTime >= 9 && currentDecimalTime < 23;
    } else if (day === 5) {
      // Sexta: 02:00 - 02:00 (plantão estendido)
      isOpen = true;
    } else if (day === 6) {
      // Sábado: 01:00 - 03:00
      isOpen = currentDecimalTime >= 1 && currentDecimalTime < 24;
    } else if (day === 0) {
      // Domingo: 10:00 as 23:00
      isOpen = currentDecimalTime >= 10 && currentDecimalTime < 23;
    }

    return {
      isOpen,
      statusText: isOpen ? "Aberto Agora" : "Fechado no Momento",
      currentDayName: todayConfig.dayName,
      currentHours: todayConfig.displayHours,
    };
  } catch {
    return {
      isOpen: true,
      statusText: "Aberto Agora",
      currentDayName: "Hoje",
      currentHours: "09:00 - 23:00",
    };
  }
}
