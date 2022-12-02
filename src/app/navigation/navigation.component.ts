import { Component } from "@angular/core";

interface Link {
  label: string;
  link: string;
  iconPath: string;
}

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent {
  readonly links: Link[] = [
    { label: "Players", link: "/players", iconPath: "assets/person_FILL0_wght400_GRAD0_opsz24.svg" },
    { label: "Teams", link: "/teams", iconPath: "assets/workspaces_FILL0_wght400_GRAD0_opsz24.svg" },
  ];
}
