import { NextResponse } from "next/server"; 
import { conexion } from "@/cosmeticos/conexion";
import clima from "@/modelos/clima";

export async function POST(request) {
    conexion()
    try {
        const { name, temp, temp_max, temp_min, humidity} = await request.json();
        const data = new clima ({ name, temp, temp_max, temp_min, humidity})
        const Clima = await data.save();
        return NextResponse.json(Clima);
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}
