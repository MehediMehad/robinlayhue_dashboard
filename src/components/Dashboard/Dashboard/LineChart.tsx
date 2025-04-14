"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export function LineChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Generate days of the month (1-31)
    const days = Array.from({ length: 31 }, (_, i) => i + 1)

    // Sample data that resembles the chart in the image
    const data = [
      2000, 2500, 3000, 3500, 2800, 3200, 6500, 6000, 5000, 4500, 4800, 5200, 5000, 5500, 6000, 7000, 7500, 8000, 9000,
      9500, 9200, 9000, 8500, 8200, 8000, 8200, 8000, 8500, 9000, 9500, 10000,
    ]

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    // Create the chart
    const ctx = chartRef.current.getContext("2d")
    if (ctx) {
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: days,
          datasets: [
            {
              label: "Earnings",
              data: data,
              borderColor: "#333",
              backgroundColor: "rgba(0, 0, 0, 0)",
              tension: 0.3,
              borderWidth: 1.5,
              pointRadius: 0,
              pointHoverRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              mode: "index",
              intersect: false,
            },
          },
          scales: {
            x: {
              grid: {
                color: "#f1f1f1",
              },
              ticks: {
                font: {
                  size: 10,
                },
                color: "#888",
              },
            },
            y: {
              min: 0,
              max: 20000,
              ticks: {
                stepSize: 2000,
                font: {
                  size: 10,
                },
                color: "#888",
              },
              grid: {
                color: "#f1f1f1",
              },
            },
          },
          interaction: {
            intersect: false,
            mode: "index",
          },
        },
      })
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <div className="h-[320px] ">
      <canvas ref={chartRef} height="400"></canvas>
    </div>
  )
}
