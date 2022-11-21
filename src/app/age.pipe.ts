import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "age",
})
export class AgePipe implements PipeTransform {
  transform(date: string | Date): number {
    const today = Date.now();
    const then = new Date(date).getTime();
    return new Date(today - then).getUTCFullYear() - 1970;
  }
}
