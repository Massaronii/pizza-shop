import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {  TableCell, TableRow } from "@/components/ui/table"
import { ArrowRight, Search, X } from "lucide-react"
import { OrderDetails } from "./order-details";

export function OrderTableRow(){
  return (
    <>
      <TableRow>
        <TableCell>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="xs">
                <Search className="h-3 w-3" />
                <span className="sr-only">Detalhes do pedido</span>
              </Button>
            </DialogTrigger>

            <DialogContent><OrderDetails/></DialogContent>
          </Dialog>
        </TableCell>
        <TableCell className="font-mono text-xs font-medium">
          490-1u4190481-41
        </TableCell>
        <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
        <TableCell></TableCell>
        <TableCell className="font-medium">Yago Massaroni</TableCell>
        <TableCell className="font-medium">R$140.00</TableCell>
        <TableCell>
          <Button variant="outline" size="xs">
            <ArrowRight className="mr-2 h-3 w-3" />
            Aprovar
          </Button>
        </TableCell>
        <TableCell>
          <Button variant="ghost" size="xs">
            <X className="mr-2 h-3 w-3" />
            Cancelar
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}