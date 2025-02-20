import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class Token extends Model {
  @Column
  token: string;
}
