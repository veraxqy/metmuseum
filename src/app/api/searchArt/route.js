export async function GET(request){
    const searchParams = request
    const objectId = searchParams.get("objectId")
    const httpRes = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
    const jsonRes = await httpRes.json()
    return Response.json({...jsonRes}) 
}