import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class Jwt extends Model {
  @Column
  token: string;
}
