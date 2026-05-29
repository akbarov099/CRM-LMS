import { BarChart } from '@mui/x-charts/BarChart';
import { useTranslation } from 'react-i18next';

export default function PaymentChart() {
    const { t } = useTranslation();

    const totalStudents = 120;
    const paid = 50;
    const prepaid = 30;
    const partiallyPaid = 10;
    const notPaid = 20;

    const labels = [
        t("total"),
        t("paid"),          
        t("prepaid"),
        t("partiallyPaid"), 
        t("notPaid"),       
    ];

    const values = [totalStudents, paid, prepaid, partiallyPaid, notPaid];

    const colors = [
        '#378ADD',
        '#3B6D11',
        '#533AB7',
        '#BA7517',
        '#A32D2D',
    ];

    const yMax = Math.ceil((totalStudents * 1.15) / 10) * 10;

    const series = labels.map((label, i) => ({
        label,
        data: values.map((v, idx) => (idx === i ? v : 0)),
        color: colors[i],
    }));

    return (
        <div className="charts">
            <h2>{t("financial")}</h2>
            <h3>{t("statistics")}</h3>

            <div className="chartBox">
                <BarChart
                    height={300}
                    xAxis={[
                        {
                            data: labels,
                            scaleType: 'band',
                        },
                    ]}
                    yAxis={[
                        {
                            min: 0,
                            max: yMax,
                        },
                    ]}
                    series={series}
                    slotProps={{
                        legend: { hidden: true },
                    }}
                />
            </div>
        </div>
    );
}