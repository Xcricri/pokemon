import React, { useState, useEffect } from 'react'
import {api} from '../../../lib/axios'

export function useChart(id) { 
    const [stats, setStats] = useState([])
    const [name, setname] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!id) return;
        
        async function fetchStats() {
            try {
                const response = await api.get(`/pokemon/${id}`)
                setStats(response.data.stats)
                setname(response.data.name)
                setImage(response.data.sprites.front_default)
                setLoading(false)
            } catch (err) {
                setError(err)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        }   

        fetchStats()
    }, [id])

    return { stats, name, image, loading, error }
}