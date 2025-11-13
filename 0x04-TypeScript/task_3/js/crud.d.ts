/// <reference path="./interface.ts" />

import { RowID, RowElement } from './interface';

// Use RowElement for row parameter and RowID for return type
export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): RowID;
