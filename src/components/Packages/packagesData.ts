export type PackageType = {
    title: string
    rating: number
    time: string
    hoursQuarterly: string
    investment: string
    initInvestment: string
}

export const packages = [
    {
        title: "standard plan",
        rating: 1,
        time: "25 hours",
        hoursQuarterly: "15 hours quarterly",
        investment: "$1,800 monthly investment",
        initInvestment: "$3,125 initial investment",
    },
    {
        rating: 2,
        title: "premium plan",
        time: "40 hours",
        hoursQuarterly: "25 hours quarterly",
        investment: "$3,600 monthly investment",
        initInvestment: "$3,125 initial investment"
    },
    {
        rating: 3,
        title: "ultimate & ecommerce plan",
        time: "40 hours",
        hoursQuarterly: "35 hours quarterly",
        investment: "$4,800 monthly investment",
        initInvestment: "$3,125 initial investment"
    }
]