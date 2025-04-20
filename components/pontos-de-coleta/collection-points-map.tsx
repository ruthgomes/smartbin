"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

export function CollectionPointsMap() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Simulando o carregamento do mapa
  setTimeout(() => {
    if (!isLoaded) setIsLoaded(true)
  }, 1000)

  return (
    <div className="relative w-full h-[600px] bg-gray-100 rounded-md overflow-hidden">
      {!isLoaded ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gray-200">
          {/* Mapa simulado */}
          <div className="w-full h-full bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover relative">
            {/* Pontos de coleta simulados */}
            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative group">
                <MapPin className="h-8 w-8 text-green-500" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Ponto Central - 64% cheio
                </div>
              </div>
            </div>
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative group">
                <MapPin className="h-8 w-8 text-yellow-500" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Ponto Norte - 50% cheio
                </div>
              </div>
            </div>
            <div className="absolute top-2/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative group">
                <MapPin className="h-8 w-8 text-red-500" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Ponto Sul - 90% cheio
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative group">
                <MapPin className="h-8 w-8 text-green-500" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Ponto Leste - 30% cheio
                </div>
              </div>
            </div>
            <div className="absolute top-3/4 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative group">
                <MapPin className="h-8 w-8 text-gray-400" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Ponto Oeste - Inativo
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-green-500" />
              <span>Menos de 50% cheio</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-yellow-500" />
              <span>Entre 50% e 80% cheio</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-red-500" />
              <span>Mais de 80% cheio</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-gray-400" />
              <span>Inativo</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
